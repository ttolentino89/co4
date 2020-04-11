class ItemsController < ApplicationController
  before_action :set_item, only: [:show, :update, :destroy, :add_category]
before_action :authorize_request, only: [:create, :update, :destroy, :add_category]

  # GET /items
  def index
    # @user = User.find(params[:user_id])
    # @items = Item.where(user_id: @user.id)
    # render json: @items, include: :user, status: :ok
    @items = Item.order(:id)
    render json: @items
  end

  # GET /items/1
  def show
    # render json: @item, include :items
    render json: @item
  end

  # POST /items
  def create
    @item = Item.new(item_params)

    if @item.save
      render json: @item, status: :created, location: @item
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /items/1
  def update
    if @item.update(item_params)
      render json: @item
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /items/1
  def destroy
    @item.destroy
  end

  def add_category
    @category = Category.find(params[:category_id])
    @item.categories << @category
    render json: @item, include: :categories
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_item
      @item = Item.find(params[:id])
    rescue ActiveRecord::RecordNotFound
      render json: { message: 'Sorry! Item not found.' }, status: 404
    end

    # Only allow a trusted parameter "white list" through.
    def item_params
      params.require(:item).permit(:name, :description, :img_link, :quantity)
    end
end
