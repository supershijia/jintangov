class Admin::DeptMgmsController < ApplicationController
  layout 'main'

  def index
    @depts = Dept.all
  end

  def show
    @depts = Dept.find(params[:id])
  end

  def new
    @depts = Dept.new
  end


  def edit
    @depts = Dept.find(params[:id])
  end

  def create
    @depts = Dept.new(params[:dept])

    respond_to do |format|
      if @depts.save
        format.html { redirect_to admin_dept_mgms_path, notice: 'dept was successfully created.' }
        format.json { render json: @depts, status: :created, location: @depts }
      else
        format.html { render action: "new" }
        format.json { render json: @depts.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    @depts = Dept.find(params[:id])

    respond_to do |format|
      if @depts.update_attributes(params[:dept])
        format.html { redirect_to admin_dept_mgms_path, notice: 'Dept was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @depts.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @depts = Dept.find(params[:id])
    @depts.destroy

    respond_to do |format|
      format.html { redirect_to admin_dept_mgms_url }
      format.json { head :no_content }
    end
  end
end
