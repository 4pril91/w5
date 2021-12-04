class Site {
    constructor() {
        this.boards = [];

    }
    addBoard(newBoard) {
        for (const board of this.boards) {
            if (board.name == newBoard.name) {
                throw new TypeError();
            }
        }
        newBoard.exist = 1;
        this.boards.push(newBoard);
    }
    findBoardByName(BoardName) {
        for (const board of this.boards) {
            if (board.name == BoardName) {
                return board;
            }
        }

    }
}
class Board {
    constructor(name) {
        this.name = name;
        this.exist = 0;
        this.articles = [];
        if (name == '' || name == null) {
            throw new TypeError();
        }
    }
    publish(article) {

        if(this.exist == 1){                // 1 이면 사이트에 보드가 존재함
            this.article = article
            article.id = `${this.name}-`
            const nowDate = new Date();
            article.createdDate = nowDate.toISOString();
        } else {
            throw new TypeError();
        }
        article.exist = 1;
        this.articles.push(article);
    }

    getAllArticles(){
        return this.articles;
    }
}
class Article { 
    constructor(formAticles){
        this.comments = [];
        const subject = formAticles.subject;
        const content = formAticles.content;
        const author = formAticles.author;
        this.subject = subject;
        this.content = content;
        this.author = author;
        if(subject == null || subject == ''|| content == null || content == '' || author == null || author == ''){
            throw new TypeError();
        }
    }
    reply(comment){
        if(this.exist == 1){
            this.comment = comment;
            const nowDate = new Date();
            comment.createdDate = nowDate.toISOString();
            this.comments.push(comment);    
        } 
        else { 
            throw new TypeError();
        }
    }
    
    getAllComments(){
        return this.comments;
    }
}
class Comment {
    constructor(formComments){
        const content = formComments.content;
        const author = formComments.author;
        this.content = content;
        this.author = author;
        if(content == null || content == '' || author == null || author == ''){
            throw new TypeError();
        }
    }
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
