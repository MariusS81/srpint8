function object_description(books) {
       for (const book of books) {
       const { titlu, autor, esteCitita } = book;
       console.log(`${titlu} de ${autor}`);
       if (esteCitita) {
       console.log(`Ai citit deja "${titlu}" de ${autor}`);
     } else {
       console.log(`Trebuie să citesti "${titlu}" de ${autor}`);
       }
     }
    }
    
     const books = [
      { titlu: "Carte 1", autor: "Autor 1", esteCitita: true },
      { titlu: "Carte 2", autor: "Autor 2", esteCitita: false },
     ];
    
    object_description(books);