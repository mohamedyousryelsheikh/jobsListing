// console.log(data);

var tagsAdded = $("#filter-tags-list");
var cardTags = $(".job-card__tags li");
var allCards = $("#job-list > li");
var filterTagsMainWrapper = $(".filter-tags-c");



function addTagToFilterArea(tag){
  //debugger;
  var filterAreaTags = tagsAdded.find("li");
  var addFlag = true;
 
    
      for(var i=0; i < filterAreaTags.length;i++){
        var currentTagText = filterAreaTags.eq(i).find("p").text();
        if(currentTagText == tag){
          addFlag = false;
        }

        
      }
    
    addFlag && tagsAdded.append("<li class='tag-filter'><p>"+tag+"</p><span class='close-span'>×</span></li>");
  
}

function clearAllTags(){
  tagsAdded.find("li").remove();
  allCards.removeClass("d-none");
}
function toggleTagsFilterArea(flag){
  if(flag == 'hidden')
    filterTagsMainWrapper.hide();
  else
  filterTagsMainWrapper.show();
}
    
    $(document).ready(function(){
      
     
      toggleTagsFilterArea('hide');
      

      $(".clear-tags").click(clearAllTags)

      cardTags.click(function(){

        toggleTagsFilterArea('show');
        var tagText = $(this).text();
        var matching = 0;
        
        allCards.addClass("d-none").attr("data-show",false);
        addTagToFilterArea(tagText);
        var tagSelected = tagsAdded.find("li");


        // loop on all cards
        for(var i = 0; i< allCards.length;i++){
          //  debugger;
          matching = 0;
          // get tags for one card
          var singleCardTags = allCards.eq(i).find(".job-card__tags li");
          
          // loop on all the tags selected by the user
          for(var k = 0; k<tagSelected.length;k++){
            // loop on all the tags for this one card
            for(var j = 0 ;j < singleCardTags.length; j++){
              if(singleCardTags.eq(j).text() == tagSelected.eq(k).find("p").text() ){
                matching +=1;
                // allCards.eq(i).removeClass("d-none");
              }
            }
          }
          if(matching == tagSelected.length){
                allCards.eq(i).removeClass("d-none");
          }
        }
      })
      
      $(document).on("click",".close-span",function(){

        $(this).parents(".tag-filter").remove();
        var matching = 0;
        var tagSelected = tagsAdded.find("li");
        allCards.addClass("d-none").attr("data-show",false);
        
        for(var i = 0; i< allCards.length;i++){
          matching = 0;
          
          var singleCardTags = allCards.eq(i).find(".job-card__tags li");
          for(var k=0;k<tagSelected.length;k++){

            for(var j = 0; j<singleCardTags.length;j++){
              if(singleCardTags.eq(j).text() == tagSelected.eq(k).find("p").text()){
                matching +=1;
                // allCards.eq(i).attr("data-show",true).removeClass("d-none")
              }
            }

          }
          if(matching == tagSelected.length){
            allCards.eq(i).removeClass("d-none");
      }

        }

        
      })

    });