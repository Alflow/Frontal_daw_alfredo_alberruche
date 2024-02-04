export default function Profile (){

    const $userName = document.createElement('h3');
    $userName.innerText = "Alfredo"

    const $image = document.createElement('img');
    $image.src = 'https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/307526448_501035532036097_5798249910155217154_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=SAMgU1p5O7YAX9ykG_F&_nc_ht=scontent-mad1-1.xx&oh=00_AfAgKsjayVhynbqSe8YMxcT7k94MP3eXTgVoj8Brd37-hQ&oe=65C46EC4'

    const $article = document.createElement("article");

    $article.appendChild($userName);
    $article.appendChild($image);

    return $article;
}