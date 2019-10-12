Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, param: :id
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify/:token', to: 'authentication#verify' , constraints: { token: /.*/ }

  get '/*a', to: 'application#not_found'
end
