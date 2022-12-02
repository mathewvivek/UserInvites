class Api::V1::BaseController < ApplicationController

	include Devise::Controllers::Helpers
	protect_from_forgery with: :exception, if: :json_request?
	protect_from_forgery with: :null_session, if: :json_request?
  respond_to :json
	skip_before_action :authenticate_user!, :raise => false

  include Authenticable

	protected

	def json_request?
		request.format.json?
	end

end