var tagsAdded = $("#filter-tags-list");
var cardTags = $(".job-card__tags li");
var allCards = $("#job-list li");
var filterTagsMainWrapper = $(".filter-tags-c");

function addTagToFilterArea(tag){
  //debugger;
  var filterAreaTags = cardTags.find("li");
  var addFlag = true;
 
    
      for(var i=0; i < filterAreaTags.length;i++){
        var currentTagText = filterAreaTags.eq(i).text();
        if(currentTagText == tag){
          addFlag = false;
        }

        
      }
    
    addFlag && tagsAdded.append("<li class='tag-filter'><p>"+tag+"</p><span class='close-span'>×</span></li>");
  
}

function clearAllTags(){
  tagsAdded.find("li").remove();
  toggleTagsFilterArea('hidden');
  
}
function toggleTagsFilterArea(flag){
  if(flag == 'hidden')
    filterTagsMainWrapper.hide();
  else
  filterTagsMainWrapper.show();
}
    
    $(document).ready(function(){
      
     
      toggleTagsFilterArea('hidden');
      

      $(".clear-tags").click(clearAllTags)

      cardTags.click(function(){

        toggleTagsFilterArea('show');
        var tagText = $(this).text();
        var matching = 0;
        
        allCards.addClass("d-none").attr("data-show",false);
        addTagToFilterArea(tagText);
        var tagSelected = tagsAdded.find("li");


        for(var i = 0; i< allCards.length;i++){
          //  debugger;
          
          var singleCardTags = allCards.eq(i).find(".job-card__tags li");
          //console.log(singleCardTags)
          for(var k = 0; k<tagSelected.length;k++){
            for(j = 0 ;j < singleCardTags.length; j++){
              if(singleCardTags.eq(j).text() == tagSelected.eq(k).find('p').text() ){
                  allCards.eq(i).removeClass("d-none").attr("data-show", true);
                
  
  
              }
              
            
            }
            
            
          }
          // if(matching == tagSelected.length){
          //       allCards.eq(i).removeClass("d-none");
          // }
        }
      })
      
      $(document).on("click",".close-span",function(){

        $(this).parents(".tag-filter").remove();
        var matching = 0;
        var tagSelected = tagsAdded.find("li");
        allCards.addClass("d-none").attr("data-show",false);
        
        for(var i = 0; i< allCards.length;i++){
          
          
          var singleCardTags = allCards.eq(i).find(".job-card__tags li");
          for(k=0;k<tagSelected.length;k++){

            for(var j = 0; j<singleCardTags.length;j++){
              if(singleCardTags.eq(j).text() == tagSelected.eq(k).text()){
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