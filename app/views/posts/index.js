<% @posts.each do |post| %>
  $("#posts").append("<%= j render 'shared/post', post: post %>");
<% end %>
