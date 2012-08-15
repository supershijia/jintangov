#Encoding:utf-8
module ApplicationHelper
  def left_menu(els) #生成左边栏 eg: [["/admin/user_mgms","hhh"],["/admin/user_mgms","asdasd"]]
    content_tag :div, :class => "left_cont" do
      content_tag :div, :class => "side_bar" do
        content_tag :ul, :class => "side_l" do
            els.collect {|e| concat(content_tag(:li, content_tag("a",e[1],{:href => e[0],:name => e[1]})))}
        end
      end
    end
  end

  def left_menu_boards     #系统管理左边栏
    left_menu([["/admin/user_mgms","用户管理"],["/admin/dept_mgms","部门管理"],["/admin/role_mgms","角色管理"],["/admin/attr_mgms","属性设置"],["/admin/log_mgms","用户日志"]])
  end

end
