import { BookOpen, Pencil, Users } from "lucide-react";
import { Link } from "react-router-dom";
function Landing() {
  const Post = [
    {
      id: "1",
      title: "The Future of Web Development",
      excerpt: "Exploring upcoming trends in web technologies...",
      date: "2023-09-15",
      author: "Alice Johnson",
    },
    {
      id: "2",
      title: "Mastering Remix - Break out of the crowd",
      excerpt: "Advanced techniques to level up your Remix skills...",
      date: "2023-09-10",
      author: "Bob Smith",
    },
    {
      id: "3",
      title: "Design Systems in 2023",
      excerpt: "How design systems are evolving in modern web development...",
      date: "2023-09-05",
      author: "Charlie Brown",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {" "}
      <header className="border-b">
        {" "}
        <div className="container mx-auto transi px-4 py-4">
          {" "}
          <div className="flex flex-col sm:flex-row justify-between items-center">
            {" "}
            <Link
              to="/"
              className="text-2xl font-bold poppins-semibold text-blue-600 mb-4 sm:mb-0">
              {" "}
              BlogStack{" "}
            </Link>{" "}
            <nav>
              {" "}
              <ul className="flex flex-wrap justify-center poppins-regular sm:justify-end space-x-4">
                {" "}
                <li>
                  {" "}
                  <Link
                    to="/about"
                    className="text-gray-600 hover:text-blue-600 transition-colors">
                    {" "}
                    About{" "}
                  </Link>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <Link
                    to="/contact"
                    className="text-gray-600 hover:text-blue-600 transition-colors">
                    {" "}
                    Contact{" "}
                  </Link>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <Link
                    to="/signup"
                    className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm">
                    {" "}
                    Sign Up{" "}
                  </Link>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <Link
                    to="/login"
                    className="px-3 py-1 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition-colors text-sm">
                    {" "}
                    Log In{" "}
                  </Link>{" "}
                </li>{" "}
              </ul>{" "}
            </nav>{" "}
          </div>{" "}
        </div>{" "}
      </header>{" "}
      <main className="flex-grow">
        {" "}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 poppins-regular text-white py-20">
          {" "}
          <div className="container mx-auto px-4 text-center">
            {" "}
            <h1 className="text-5xl font-bold mb-6">
              Welcome to BlogStack
            </h1>{" "}
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {" "}
              Elevate your writing, connect with readers, and build your online
              presence with our powerful blogging platform.{" "}
            </p>{" "}
            <Link
              to="/signup"
              className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              {" "}
              Get Started{" "}
            </Link>{" "}
          </div>{" "}
        </section>{" "}
        <section className="py-16 poppins-light bg-gray-100">
          {" "}
          <div className="container mx-auto px-4">
            {" "}
            <h2 className="text-3xl font-bold text-gray-500 mb-12 text-center">
              {" "}
              Why Choose BlogStack?{" "}
            </h2>{" "}
            <div className="grid md:grid-cols-3 gap-8">
              {" "}
              <div className="bg-white p-6 rounded-lg shadow-md">
                {" "}
                <Pencil className="w-10 h-10 text-blue-600 mb-4" />{" "}
                <h3 className="text-xl font-semibold mb-2 text-gray-500 ">
                  {" "}
                  Easy to Use{" "}
                </h3>{" "}
                <p className="text-gray-600">
                  {" "}
                  Intuitive interface designed for writers of all levels. Start
                  creating beautiful posts in minutes.{" "}
                </p>{" "}
              </div>{" "}
              <div className="bg-white p-6 rounded-lg shadow-md">
                {" "}
                <BookOpen className="w-10 h-10 text-blue-600 mb-4" />{" "}
                <h3 className="text-xl font-semibold mb-2 text-gray-500 ">
                  {" "}
                  Rich Features{" "}
                </h3>{" "}
                <p className="text-gray-600">
                  {" "}
                  From markdown support to SEO tools, we provide everything you
                  need to make your content shine.{" "}
                </p>{" "}
              </div>{" "}
              <div className="bg-white p-6 rounded-lg shadow-md">
                {" "}
                <Users className="w-10 h-10 text-blue-600 mb-4" />{" "}
                <h3 className="text-xl font-semibold mb-2 text-gray-500 ">
                  {" "}
                  Growing Community{" "}
                </h3>{" "}
                <p className="text-gray-600">
                  {" "}
                  Connect with other writers, collaborate on projects, and grow
                  your audience organically.{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="py-16  poppins-light">
          {" "}
          <div className="container mx-auto px-4">
            {" "}
            <h2 className="text-3xl font-bold text-gray-500 mb-8 text-center">
              {" "}
              Featured Posts{" "}
            </h2>{" "}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {" "}
              {Post.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-lg hover:-translate-y-4 transi  shadow-md overflow-hidden">
                  {" "}
                  <div className="p-6">
                    {" "}
                    <h3 className="text-xl font-semibold text-gray-500 mb-2">
                      {" "}
                      {post.title}{" "}
                    </h3>{" "}
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>{" "}
                    <div className="flex justify-between items-center">
                      {" "}
                      <div className="text-sm text-gray-500">
                        {" "}
                        <p>{post.author}</p> <p>{post.date}</p>{" "}
                      </div>{" "}
                      <Link
                        to={`/blog/${Number(post.id + 5)}`}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                        {" "}
                        Read More{" "}
                      </Link>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <Link
          to={`/blogs`}
          className="px-4 py-2 bg-blue-600 text-white rounded max-w-32 mx-auto text-center  mb-8 flex flex-col hover:bg-blue-700 transition-colors">
          {" "}
          More posts{" "}
        </Link>{" "}
        <section className="py-16 poppins-light bg-gray-100">
          {" "}
          <div className="container mx-auto px-4 text-center">
            {" "}
            <h2 className="text-3xl font-bold mb-6 text-gray-500 ">
              {" "}
              Stay Updated{" "}
            </h2>{" "}
            <p className="mb-8 max-w-2xl mx-auto text-gray-500 ">
              {" "}
              Subscribe to our newsletter for the latest blogging tips, feature
              updates, and community highlights.{" "}
            </p>{" "}
            <form className="flex max-w-md mx-auto">
              {" "}
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-l-lg border-t border-b border-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />{" "}
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-r-lg hover:bg-blue-700 transition-colors">
                {" "}
                Subscribe{" "}
              </button>{" "}
            </form>{" "}
          </div>{" "}
        </section>{" "}
      </main>{" "}
      <footer className="bg-blue-600 text-white poppins-light py-8">
        {" "}
        <div className="container mx-auto px-4">
          {" "}
          <div className="grid md:grid-cols-3 gap-8">
            {" "}
            <div>
              {" "}
              <h3 className="text-lg font-semibold mb-4">BlogStack</h3>{" "}
              <p className="text-sm">
                {" "}
                Empowering writers to share their stories with the world.{" "}
              </p>{" "}
            </div>{" "}
            <div>
              {" "}
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>{" "}
              <ul className="space-y-2">
                {" "}
                <li>
                  {" "}
                  <Link to="/about" className="text-sm hover:underline">
                    {" "}
                    About Us{" "}
                  </Link>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <Link to="/features" className="text-sm hover:underline">
                    {" "}
                    Features{" "}
                  </Link>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <Link to="/pricing" className="text-sm hover:underline">
                    {" "}
                    Pricing{" "}
                  </Link>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <Link to="/contact" className="text-sm hover:underline">
                    {" "}
                    Contact{" "}
                  </Link>{" "}
                </li>{" "}
              </ul>{" "}
            </div>{" "}
            <div>
              {" "}
              <h3 className="text-lg font-semibold mb-4">Legal</h3>{" "}
              <ul className="space-y-2">
                {" "}
                <li>
                  {" "}
                  <Link to="/privacy" className="text-sm hover:underline">
                    {" "}
                    Privacy Policy{" "}
                  </Link>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <Link to="/terms" className="text-sm hover:underline">
                    {" "}
                    Terms of Service{" "}
                  </Link>{" "}
                </li>{" "}
              </ul>{" "}
            </div>{" "}
          </div>{" "}
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            {" "}
            <p>
              {" "}
              &copy; {new Date().getFullYear()} BlogStack. All rights reserved.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </footer>{" "}
    </div>
  );
}

export default Landing;
