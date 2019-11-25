class ApplicationController < ActionController::API

  include Swagger::Docs::Methods

  before_action :authenticate_request
  attr_reader :current_user
  
  
  private
  def authenticate_request
    @current_user = AuthorizeApiRequest.call(request.headers).result
    render json: { error: 'Not Authorized' }, status: 401 unless @current_user
  end

  class << self
  
    def inherited(subclass)
      super
      subclass.class_eval do
        setup_basic_api_documentation
      end
    end

    private
    def setup_basic_api_documentation
      [:index, :show, :create, :update, :destroy , :user_items , 
       :add_avatar , :remove_avatar , :add_reaction , :remove_reaction , :find_item,
       :top_items , :today_items].each do |api_action|
        swagger_api api_action do
          param :header, 'Authorization', :string, :required, 'Authentication token'
        end
      end
    end
  end

end
