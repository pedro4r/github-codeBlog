import { Route, Routes, useParams } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./Pages/Home";
import { Post } from "./Pages/Post";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/post/:postId" element={<Post />} />
            </Route>
        </Routes>
    );
}
