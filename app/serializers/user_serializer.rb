class UserSerializer < ActiveModel::Serializer
  attributes :id, :email
  has_many :invitations, serializer: InvitationSerializer
end
