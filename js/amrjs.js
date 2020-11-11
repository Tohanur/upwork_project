      
      
      $(document).ready(function(){
                // Add minus icon for collapse element which is open by default
                $(".collapse.show").each(function(){
                    $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
                });
                
                // Toggle plus minus icon on show hide of collapse element
                $(".collapse").on('show.bs.collapse', function(){
                    $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
                }).on('hide.bs.collapse', function(){
                    $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
                });
            });


            // mov-nav-top

        
function openNav() {
  document.getElementById("mySidepanel").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}


// mob-nab-list

$(document).ready(function(){
    // Add minus icon for collapse element which is open by default
    $(".collapse.show").each(function(){
        $(this).prev(".card-header").find(".fa").addClass("fa-angle-down").removeClass("fa-angle-up");
    });
    
    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function(){
        $(this).prev(".card-header").find(".fa").removeClass("fa-angle-up").addClass("fa-angle-down");
    }).on('hide.bs.collapse', function(){
        $(this).prev(".card-header").find(".fa").removeClass("fa-angle-down").addClass("fa-angle-up");
    });
});

// new--click

$(document).ready(function(){
    // Add minus icon for collapse element which is open by default
    $(".collapse.show").each(function(){
        $(this).prev(".card-headerr").find(".fa").addClass("fa-angle-down").removeClass("fa-angle-up");
    });
    
    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function(){
        $(this).prev(".card-headerr").find(".fa").removeClass("fa-angle-up").addClass("fa-angle-down");
    }).on('hide.bs.collapse', function(){
        $(this).prev(".card-headerr").find(".fa").removeClass("fa-angle-down").addClass("fa-angle-up");
    });
});