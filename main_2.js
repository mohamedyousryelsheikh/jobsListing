
var tagsAdded = $("#filter-tags-list");
var cardTags = $(".job-card__tags li");
var allCards = $("#job-list > li");
var filterTagsMainWrapper = $(".filter-tags-c");

function addTagToFilterArea(tag){
  //debugger;
  var filterAreaTags = tagsAdded.find("li");
  console.log(filterAreaTags)
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
  
  allCards.removeClass("d-none").attr("data-show",true);
  allCards.addClass("d-flex")
  
  
}
function toggleTagsFilterArea(flag){
  if(flag == 'hidden')
    filterTagsMainWrapper.hide();
  else
  filterTagsMainWrapper.show();
}
    
    $(document).ready(function(){
      
     
      toggleTagsFilterArea('show');

      

      $(".clear-tags").click(clearAllTags)

      cardTags.click(function(){

        toggleTagsFilterArea('show');
        var tagText = $(this).text();
        
        
        var matching = 0;
        
        allCards.addClass("d-none").attr("data-show",false);
        
        
        
        addTagToFilterArea(tagText);
        var tagSelected = tagsAdded.find("li");
        


        for(var i = 0; i< allCards.length;i++){
            
          matching = 0;
          
          var singleCardTags = allCards.eq(i).find(".job-card__tags li");
          
          
          
          for(var k = 0; k<tagSelected.length;k++){
            for(var j = 0 ;j < singleCardTags.length; j++){
              if(singleCardTags.eq(j).text() == tagSelected.eq(k).find("p").text() ){
                matching +=1;
               
                
                
  
  
              }
              
            
            }
            
            
          }
          if(matching < tagSelected.length){
            
                allCards.eq(i).removeClass('d-flex');
                allCards.eq(i).addClass('d-none')
          }
        }
      })
      
      $(document).on("click",".close-span",function(){

        $(this).parents(".tag-filter").remove();
        var tagSelected = tagsAdded.find("li");
        console.log(tagSelected)
        
        var tagtxt= tagtxt=tagSelected.eq((tagSelected.length-1)).text().substring(0,tagSelected.eq((tagSelected.length-1)).text().length-1)
       
        var matching = 0;
        
         
        allCards.removeClass('d-flex')
        allCards.addClass("d-none").attr("data-show",false);
        
        for(var i = 0; i< allCards.length;i++){
          var negative_counter=2
          var matching = 0;
          
          
          
          var singleCardTags = allCards.eq(i).find(".job-card__tags li");
          for(k=0;k<(tagSelected.length);k++){
           
            if(k>0){
              
              tagtxt=tagSelected.eq((tagSelected.length-negative_counter)).text().substring(0,tagSelected.eq((tagSelected.length-negative_counter)).text().length-1)
              
              negative_counter++
            }

            for(var j = 0; j<singleCardTags.length;j++){
              if(singleCardTags.eq(j).text() == tagtxt){
                matching +=1;
                
              }
            }

          }
          if(matching == (tagSelected.length)){
            if(tagSelected.length==0){
              allCards.attr("data-show",true).removeClass("d-none")
                allCards.addClass("d-flex")

            }
            allCards.eq(i).attr("data-show",true).removeClass("d-none")
                allCards.eq(i).addClass("d-flex")
                }

        }

        
      })

    });