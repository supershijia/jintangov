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

  def left_menu_boards
    left_menu([["/admin/user_mgms","hhh"],["/admin/user_mgms","asdasd"]])
  end

end
