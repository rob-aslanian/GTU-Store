class Api::V1::AuthController < ApplicationController
  skip_before_action  :authenticate_request, only: [:login , :verify]

  swagger_controller :auth, "Auth"

  # POST /auth/login
  def login
    command = AuthenticateUser.call(params[:email] , params[:password])

    if command.success?
       render json: { auth_token: command.result }
    else
     render json: { error: command.errors }, status: :unauthorized
    end
  end

  swagger_api :login do
    summary "Get All Items"
    param :form, :email, :email, :required, "Email"
    param :form, :password, :string, :required, "Password"
    
    response :ok, "Success", :auth_token
    response :unauthorized
    response :invalid_credentials
  end

  def verify
     token = params[:token]

     unless token == nil
          user_data = JsonWebToken.decode(token)
          @user = User.find_by email: user_data[:email]

          unless @user.is_active
            @user.update(is_active: true)

            render json: { data: @user , status: :activated}, status: :unauthorized

            else
              render json: { status: :already_activated}, status: :forbidden
          end
  
     end
  end

  private
  def login_params
    params.permit(:email, :password)
  end
end
