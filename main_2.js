
var tagsAdded = $("#filter-tags-list");
var cardTags = $(".job-card__tags li");
var allCards = $("#job-list > li");
var filterTagsMainWrapper = $(".filter-tags-c");

function addTagToFilterArea(tag){
  //// debugger;
  var filterAreaTags = tagsAdded.find("li");
  var addFlag = true;
 
    
      for(var i=0; i < filterAreaTags.length;i++){
        var currentTagText = filterAreaTags.eq(i).find("p").text();
        if(currentTagText == tag){
          addFlag = false;
        }

        
      }
    //fourth fix --> remove x letter and include x icon from fontawesome library
    addFlag && tagsAdded.append("<li class='tag-filter'><p>"+tag+"</p><span class='close-span'><i class='fas fa-times'></i></span></li>");
  
}

function clearAllTags(){
  tagsAdded.find("li").remove();
  //second fix
  allCards.removeClass("d-none")
  //fix
  allCards.addClass("d-flex");
  //sixth fix
  toggleTagsFilterArea('hidden');
  
}
function toggleTagsFilterArea(flag){
  if(flag == 'hidden'){
    filterTagsMainWrapper.hide();
    // debugger
  }
   
   
  else{
    filterTagsMainWrapper.show();
  }

}
    
    $(document).ready(function(){
      
     //first fix
      toggleTagsFilterArea('hidden');
      


      $(".clear-tags").click(clearAllTags)
    
      cardTags.click(function(){
       
        toggleTagsFilterArea('show');
        var tagText = $(this).text();
        var matching = 0;
        
        //fix
        allCards.removeClass("d-flex");
        allCards.addClass("d-none").attr("data-show",false);
        
        

     
        addTagToFilterArea(tagText);
        var tagSelected = tagsAdded.find("li");

       
        for(var i = 0; i< allCards.length;i++){
          //third fix
          matching=0;
         
          //  // debugger;
          
          var singleCardTags = allCards.eq(i).find(".job-card__tags li");
          //console.log(singleCardTags)
          
          for(var k = 0; k<tagSelected.length;k++){
            for(j = 0 ;j < singleCardTags.length; j++){
              if(singleCardTags.eq(j).text() == tagSelected.eq(k).find("p").text() ){
                matching +=1;
                
  
  
              }
              
            
            }
            
            
          }
          if(matching == tagSelected.length){
                allCards.eq(i).removeClass("d-none");
                //fix
                allCards.eq(i).addClass("d-flex");
                
          }
        }
      })
      
      $(document).on("click",".close-span",function(){

        
     
        $(this).parents(".tag-filter").remove();
        
        var matching = 0;
        var tagSelected = tagsAdded.find("li");

        var name = tagSelected.text();//added
        debugger
        // debugger
       
        allCards.removeClass("d-flex");
        allCards.addClass("d-none").attr("data-show",false);
      
       
        debugger
        for(var i = 0; i< allCards.length;i++){
          //fifth fix
          matching=0;
          // debugger
          var singleCardTags = allCards.eq(i).find(".job-card__tags li");
          for(k=0;k<tagSelected.length;k++){

            for(var j = 0; j<singleCardTags.length;j++){

              if(singleCardTags.eq(j).text() == tagSelected.eq(k).text()){
                matching +=1;
                // debugger
               // allCards.eq(i).attr("data-show",true).removeClass("d-none")
              }
            }

          }
          if(matching == tagSelected.length){
            // debugger
            allCards.eq(i).removeClass("d-none");
            allCards.eq(i).addClass("d-flex");
      }

        }

        var x = tagsAdded.text() ;
        debugger

        //fix
        if(tagsAdded.text() == ''){
          toggleTagsFilterArea('hidden')
          debugger
        }
        
      })

    });