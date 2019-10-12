class EmailtestMailer < ApplicationMailer 

    def sample_email(user , *token)
        @user = user
        @url = "http://localhost:3000/auth/verify/" + token.join('');

        puts @url;
        mail(to: @user.email, subject: 'Sample Email')
    end
end
