function add_task()
{
  setTimeout(function(){$('.error').html('');},5000);

  var user_id   = $("input[name='user_id']").val();
  var task_name = $("input[name='task_name']").val();
  var title     = $("input[name='title']").val();
  if(user_id==''){
    $('.user_id').html('User ID is required...');
    return false;
  }
  if(task_name==''){
    $('.task_name').html('Task name is required...');
    return false;
  }
  else if(title==''){
    $('.title').html('Title is required...');
    return false;
  }

  var form_Data = new FormData($('#formVal')[0]);
  
  $.ajax({
    method:"POST",
    url:base_url2+"webpanel/taskAdd",
    contentType: false,
    processData: false,
    data: form_Data,
    beforeSend: function() {
      $('.addLorder').addClass('spinner-border');
    },
    success:function(resp)
    {
      if(resp>0){
        successMessage('Task added successfully...');
        $('.addLorder').removeClass('spinner-border');
      }else{
        errorMessage('Task adding failed...');
      }
    }
    
  });
}
