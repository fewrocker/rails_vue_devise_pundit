Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  get 'chat', to: 'pages#chat'
end
