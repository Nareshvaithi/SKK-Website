import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/home";
import About from "./pages/about";
import Gallery from "./pages/gallery";
import Events from "./pages/events";
import Courses from "./pages/courses";
import Blogs from "./pages/blogs";
import Faq from "./pages/faq";
import { Context } from "./Context_API/contextProvider";
import Nopage from "./pages/nopage";
import AdminLayout from "./adminPanel/Adminpages/AdminLayout";
import AdminContext from "./adminPanel/Context_API/ContextProvider";
import EditBannerVideo from "./adminPanel/Adminpages/EditBannervideo";
import EditShorts from "./adminPanel/Adminpages/EditShorts";
import EditBannerSlider from "./adminPanel/Adminpages/EditSlider";

function App() {
  return (
    <Context>
      <AdminContext>
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="aboutskk" element={<About />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="courses" element={<Courses />} />
              <Route path="events" element={<Events />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="faq" element={<Faq />} />
              <Route path="*" element={<Nopage />} />
            </Route>
            {/* Admin Routes */}
            <Route path="/adminlayout" element={<AdminLayout />}>
              <Route index element={<EditBannerVideo />} />
              <Route path="editshorts" element={<EditShorts />} />
              <Route path="editbannerslider" element={<EditBannerSlider/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </AdminContext>
    </Context>
  );
}

export default App;
