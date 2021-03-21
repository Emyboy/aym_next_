export default {
    API_URL: process.env.NEXT_PUBLIC_API_KEY,
    ICON_URL: 'https://firebasestorage.googleapis.com/v0/b/project-managemnt-a12b8.appspot.com/o/aym%2FAYM.png?alt=media&token=c0400067-a403-408d-a942-7c8e1b49a8e0',
    BUILDER_MOCK: [
        {
            id: 1,
            content: 'Welcome to my new blog post 😊',
            type: 'heading',
            style: {
                color: 'green',
                fontSize: '30px'
            }
        },
        {
            id:2,
            content: 'Number 2 are a lot of libraries out there that allow for drag and drop interactions within React. Most notable of these is the amazing react-dnd. It does an incredible job at providing a great set of drag and drop primitives which work especially well with the wildly inconsistent html5 drag and drop feature. react-beautiful-dnd is a higher level abstraction specifically built for lists (vertical, horizontal, movement between lists, nested lists and so on). Within that subset of functionality react-beautiful-dnd offers a powerful, natural and beautiful drag and drop experience. However, it does not provide the breadth of functionality offered by react-dnd. So react-beautiful-dnd might not be for you depending on what your use case is.',
            type: 'heading',
            style: {
                color: 'blue',
            }
        }
    ]
}