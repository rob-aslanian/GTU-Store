class UserMailer < ApplicationMailer

    def auth(user , url) 
        @user = user
        @url = url
        mail(to: @user.email, subject: 'Welcome to GTU Store')
    end
end
