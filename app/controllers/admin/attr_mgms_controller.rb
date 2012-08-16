class Admin::AttrMgmsController < ApplicationController
  layout 'main'

  def index
    @attrs = Code.all
  end

  def show
    @attr = Code.find(params[:id])
  end

  def new
    @attr = Code.new
  end


  def edit
    @attr = Code.find(params[:id])
  end

  def create
    @attr = Code.new(params[:code])

    respond_to do |format|
      if @attr.save
        format.html { redirect_to admin_attr_mgms_path, notice: 'Attr was successfully created.' }
      else
        format.html { render action: "new" }
      end
    end
  end

  def update
    @attr = Code.find(params[:id])

    respond_to do |format|
      if @attr.update_attributes(params[:code])
        format.html { redirect_to admin_attr_mgms_path, notice: 'Attr was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @attr.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @attr = Code.find(params[:id])
    @attr.destroy

    #respond_with(@user,:location=>:back
    redirect_to admin_attr_mgms_path
  end
end
