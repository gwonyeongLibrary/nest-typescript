type Words = {
    // 제한된 양의 property 혹은 key를 가지는 타입을 정의해주는 방법
    [key: string]: string;
};

class Dict {
    private words: Words;
    constructor() {
        this.words = {};
    }

    add(word: Words) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }
}

class Word {
    constructor(public term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "한국의 음식");
