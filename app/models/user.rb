class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable, :validatable,
         :invitable

  has_many :invitations, :class_name => 'User', :foreign_key => 'invited_by', dependent: :destroy

  validates_presence_of :email

  def invitation_accepted?
    invitation_accepted_at.present?
  end
end

