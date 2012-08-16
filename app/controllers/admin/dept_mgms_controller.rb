class Admin::DeptMgmsController < ApplicationController
  respond_to :html, :xml, :json
  layout 'main'

  def index
    @depts = Dept.all
  end

  def show
    @dept = Dept.find(params[:id])
  end

  def new
    @dept = Dept.new
  end


  def edit
    @dept = Dept.find(params[:id])
  end

  def create
    @dept = Dept.new(params[:dept])

    respond_to do |format|
      if @dept.save
        format.html { redirect_to admin_dept_mgms_path, notice: 'dept was successfully created.' }
        format.json { render json: @dept, status: :created, location: @depts }
      else
        format.html { render action: "new" }
        format.json { render json: @dept.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    @dept = Dept.find(params[:id])

    respond_to do |format|
      if @dept.update_attributes(params[:dept])
        format.html { redirect_to admin_dept_mgms_path, notice: 'Dept was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @dept.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @dept = Dept.find(params[:id])
    @dept.destroy

    redirect_to admin_dept_mgms_path
  end
end
