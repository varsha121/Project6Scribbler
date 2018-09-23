var comments = [];

function EditSaveButtonFunc() {
    var text = document.getElementById('EditSaveBtn');
    var blogBody = document.getElementById("blogBody");
    var blogTitle = document.getElementById("blogTitleNew");
    if (text.firstChild.data == "Edit")
    {
        text.firstChild.data = "Save";
        blogBody.setAttribute("contenteditable", "true");
        blogBody.style.outlineStyle="outset";
        blogBody.style.outlineColor="blue";
        blogTitle.setAttribute("contenteditable", "true");
        blogTitle.style.outlineStyle="outset";
        blogTitle.style.outlineColor="red";
    }
    else
    {
        text.firstChild.data = "Edit";
        blogBody.setAttribute("contenteditable", "false");
        blogBody.style.outlineStyle="none";
        blogBody.style.outlineColor="none";
        var changedText = blogBody.innerHTML;
        blogTitle.setAttribute("contenteditable", "false");

        blogTitle.style.outlineStyle="none";
        blogTitle.style.outlineColor="none";

    }
}

function LikeButtonFunc(){
    var text = document.getElementById('LikeBtn');
    var count = text.getAttribute("data-count");

    count = Number(count) + 1;
    var likeCount = document.getElementById("LikeCount");
   text.setAttribute("data-count" , count);
    text.firstChild.data="Liked!";
    likeCount.innerHTML = count + " people have liked this!";

}


function commentButtonFunc(){
    var text = document.getElementById('comments');
    comments.unshift(text.value);
    showCommentsFunc();
}

function showCommentsFunc(){
    var commentSection = document.getElementsByClassName('commnetsSection')[0];
    commentSection.innerHTML="";
    var length = comments.length;
    for (i = 0; i < length; i++) {
        console.log(comments[i]);
        var para = document.createElement("p");
        para.setAttribute("class","commentDesc");
        var node = document.createTextNode(comments[i]);
        para.appendChild(node);

        commentSection.appendChild(para);
    }


}