// components/Contact.js
const Contact = () => (
    <section id="contact" className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Contact Us</h2>
        <form className="mt-6 max-w-xl mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg">Name</label>
            <input type="text" id="name" className="w-full px-4 py-2 mt-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg">Email</label>
            <input type="email" id="email" className="w-full px-4 py-2 mt-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg">Message</label>
            <textarea id="message" className="w-full px-4 py-2 mt-2 border rounded" rows="4"></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded">Send Message</button>
        </form>
      </div>
    </section>
  );
  
  export default Contact;
  