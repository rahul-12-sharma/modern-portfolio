export default function ResumeDownload() {
  return (
    <div className="text-center py-6">
      <a
        href="/Resume.pdf"
        download
        className="bg-teal-500 text-black px-6 py-3 rounded-lg shadow-lg hover:bg-teal-700 transition duration-300"
      >
        Download My Resume
      </a>
    </div>
  );
}
