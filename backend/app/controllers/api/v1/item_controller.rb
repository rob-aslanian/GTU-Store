class Api::V1::ItemController < ApplicationController

  before_action :pagination_params , only: [:index]

    # GET __ get all items
    def index 
      @items = Item.order(created_at: :desc)
                   .limit(@to)
                   .offset(@from)

      render json: { data: @items } , include: 'images'
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
                @item.images.create!(:image => file, :item_id => @item.id )
            end
          end
          render json: { data: @item }, status: :created
        else
          render json: @item.errors, status: :unprocessable_entity
        end
    end
    
     
    # TODO
    def update
      @item = Item.find_by_id(params[:id])

      if @current_user.id == @item.user_id
        unless @item.update(item_params)
          render json: { errors: @item.errors.full_messages },
                status: :unprocessable_entity
        end
        else
          images = params[:images]

          puts params[:images].nil?
          # If has images 
            if !images.nil? and params[:images].is_a?(Array) 
            #iterate through each of the files
            params[:images].each do |file|
                puts file.methods
                # @item.images.update(:image => file, :item_id => @item.id )
            end
          end

          render json: { data:[]  , status: :not_have_permission } , status: :forbidden
      end
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

      private
      def item_params
        params.permit(:title , :description , :price , :category_id)
      end
 

      private 
      def pagination_params
         @from ||= params[:from] || 0
         @to ||= params[:to] || 10
      end
end
