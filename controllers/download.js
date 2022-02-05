function downloadResume(_, res) {
  return res.download("./public/downloads/resume.pdf");
}

module.exports = { downloadResume };
