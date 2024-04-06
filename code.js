$(document).ready(function () {


    function additem(){
        if ($(".inp").val() != "") {
            let value = $(".inp").val()
          $(".tasks-bar").prepend(`<div class="task row">
            <div class="content col-9">
                ${value}
            </div>
            <div class="actions col-3 gap-1">
                <button class="btn btn-success done"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                    </svg>
                </button>
                <button class="btn btn-danger delete"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                  </svg></button>
            </div>
            </div>`);
        }
        
    }

  $("#add").click(function(){
    additem()
  })

  $(".tasks-bar").on("click", ".delete", function () {
    $(this).closest(".task").remove();
  });

  $(".tasks-bar").on("click", ".done", function(){
    $(this).closest(".task").css({"background-color":"rgb(0, 255, 0)", "color":"black"})
    $(this).remove()
  })

});
