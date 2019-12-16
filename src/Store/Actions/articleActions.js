

export const createArticle = (article) =>{
    return (dispatch, getState,{getFirebase, getFirestore})=>{

        const firestore = getFirestore();

        firestore.collection('articles').add({
            ...PromiseRejectionEvent,
            authorUsername: 'testname',
            authorId: '007',
            createdAt: new Date()
        }).then(()=>{
            dispatch({type: 'CREATE_ARTICLE', article})
        }).catch((err)=>{
            dispatch({type: 'CREATE_ARTICLE_ERROR', err})
        })

        
    }
}