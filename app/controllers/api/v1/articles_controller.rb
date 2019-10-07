class Api::V1::ArticlesController < ApplicationController


    def index
        @articles = Article.all

        render json: { data: @articles , status: :get_articles } , status: response.status
    end

    def show
      @article = Article.find(params[:id])

      puts @article.errors

      render json: { data: @article , status: :get_article } , status: response.status
    end

    def create
        user_id = session[:user_id]
        create_article = ->{
            @article = Article.create(article_params) do |u|
                u.user_id = session[:user_id]
            end

            render json: {data: @article  , status: :created } , status: response.status
        }
        
        has_permision(user_id , create_article)
    end

    private
    def has_permision(user_id , cb)
        if user_id == nil
            render json: { status: :empty_token } , status: :unauthorized
        else
            cb.call
        end
    end

    private 
    def article_params
        params.require(:article).permit(:title , :description)
    end
end
