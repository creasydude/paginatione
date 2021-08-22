import axios from 'axios';
import { useState, useEffect } from 'react';
import { Pagination } from '@material-ui/core';
function Posts() {
    const [page, setPage] = useState();
    const [posts, setPosts] = useState();

    useEffect(() => {
        const postsHandler = async () => {
            try {
                const res = await axios({
                    method: "GET",
                    url: `/posts?page=${page || 1}&limit=2`,
                })
                setPosts(res.data)
            } catch (err) {
                console.log(err)
                setPosts()
            }
        }
        postsHandler()
    }, [page])

    const goPageIndex = (index) => {
        setPage(index)
    }
    const showPosts = posts?.data?.map((item, index) => {
        return (
            <div key={index}>
                <p>{item.title}</p>
                <p>{item.content}</p>
                <p>Post No :{item.index}</p>
                <hr />
            </div>
        )
    })
    return (
        <div>
            <Pagination getItemAriaLabel={(type, page, selected) => {
                if (selected) {
                    goPageIndex(page)
                }
            }} count={posts?.pages} />
            {posts ? showPosts : "No Posts Found"}
        </div>
    )
}

export default Posts;
