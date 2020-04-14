//The module is for drupal, modue blazy_blurry_placeholder is required

<script type="text/javascript">

function ReplaceUrl( ) {

    var ClassNum = document.getElementsByClassName("image-blazy_blurry_placeholder");
    var i;
    for (i = 0; i < ClassNum.length; i++) {
    

var elems = document.getElementsByClassName("image-blazy_blurry_placeholder")[i].src;


var newurl = elems.replace('styles/blazy_blurry_placeholder/public', '');

document.getElementsByClassName("image-blazy_blurry_placeholder")[i].src = newurl;


var newelems = document.getElementsByClassName("image-blazy_blurry_placeholder")[i].src;


}

}


</script>

