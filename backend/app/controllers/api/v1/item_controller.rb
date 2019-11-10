class Api::V1::ItemController < ApplicationController

  before_action :pagination_params , only: [:index]

   swagger_controller :item, "Items"

    # GET __ get all items
    def index 
      @items = Item.order(created_at: :desc)
                   .where(category_id:@category_id)
                   .limit(@to)
                   .offset(@from)

      
      render json: { data: @items } , :include => {:images => {:only => :image }}
    end

    swagger_api :index do
      summary "Get All Items"
      notes "Get All items , by defauls from 0 to 10"
      param :query, :from, :integer, :optional, "Take from"
      param :query, :to, :integer, :optional, "Count"
      param :query, :category_id, :integer, :optional, "Categoty id"

      response :unauthorized
    end



    # GET __ get by id 
    def show 
      begin
        @item = Item.find(params[:id])
        render json:{ data: @item } , include: 'images' , status: :ok
      rescue => exception
        render json: { data: [] } , status: :not_found
      ensure
        
      end
    end

    swagger_api :show do
      summary "Get Item by ID"
      notes "Return item by id"
      param :path, :id, :integer, :optional, "Item Id"
      response :unauthorized
      response :not_found
    end

    # GET _ All User Items 
    def user_items 
      unless @current_user.nil?
         @item = Item.where( user_id: @current_user.id )

         render json: { data:@item } ,  include: 'images' , status: :ok
      end
    end

    swagger_api :user_items do
      summary "Get All User Items"
      notes "Return list of user items"
      response :unauthorized
      response :not_found
    end

    # POST _ create new item 
    def create
        @item = Item.new(item_params)
        @item.user_id = @current_user.id

        if @item.save
          images = params[:images]
  
          # If has images 
            if !images.nil? and params[:images].is_a?(Array) 
            #iterate through each of the files
            params[:images].each do |file|
                puts file
                @item.images.create!(:image => file, :item_id => @item.id )
            end
          end
          render json: { data: @item }, status: :created
        else
          render json: @item.errors, status: :unprocessable_entity
        end
    end

    swagger_api :create do
      summary "Create new item"
      notes "Create a new item , using FORMDATA"
      param :form, "item[title]", :string, :optional, "Title"
      param :form, "item[description]", :string, :optional, "Description"
      param :form, "item[price]", :integer, :optional, "Price"
      param :form, "item[category_id]", :integer, :optional, "Category id"
      param :form, "item[images[]]", :array, :optional, "Images"

      response :unauthorized
      response :not_acceptable
      response :unprocessable_entity
    end
    
     
    def update
      @item = Item.find_by_id(params[:id])

      if @current_user.id == @item.user_id
          if @item.update(item_params)
            # If has images 
          if params[:images].nil? and params[:images].is_a?(Array) 
              #iterate through each of the files
              params[:images].each do |file|
                  puts file.methods
                  @item.images.create!(:image => file, :item_id => params[:id] )
              end
              render json: { status: :updated } , status: :unprocessable_entity
          end
        end
        else

          render json: { data:[]  , status: :not_have_permission } , status: :forbidden
      end
    end

    swagger_api :update do
      summary "Update item"
      notes "Update current item , using also FORMDATA"
      param :path , :id , :integer , :required , 'Item ID'
      param :form, "title", :string, :optional, "Title"
      param :form, "description", :string, :optional, "Description"
      param :form, "price", :integer, :optional, "Price"
      param :form, "category_id", :integer, :optional, "Category id"
      param :form, "images[]", :array, :optional, "Images"

      response :unauthorized
      response :not_acceptable
      response :unprocessable_entity
    end


    # DELETE _ remove item with images
    def destroy 
      @item = Item.find_by_id(params[:id])

      if @current_user.id == @item.user_id
          @item.destroy
          render json: { data: @user , status: :deleted } , status: :ok
      else
        render json: { data:[]  , status: :not_have_permission } , status: :forbidden
      end
    end

    swagger_api :destroy do
      summary "Delete item"
      notes "Delete item by id"
      param :path , :id , :integer , :required , 'Item ID'
      response :unauthorized
      response :not_have_permission
      response :forbidden
    end

    private
    def item_params
      params.permit(:title , :description , :price , :category_id )
    end


    private 
    def pagination_params
        @from ||= params[:from] || 0
        @to ||= params[:to] || 10
        @category_id ||= params[:category_id] || 1
    end
end
