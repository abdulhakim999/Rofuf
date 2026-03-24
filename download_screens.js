const fs = require('fs');
const https = require('https');
const path = require('path');

const dir = path.join(__dirname, '.stitch', 'designs', 'secondary');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const urls = {
  payment: "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzlmM2ZiNzJjNjVkNzRmNGRiOGZhNjY3YTlmYzVmZjQxEgsSBxDN35z7zRYYAZIBIwoKcHJvamVjdF9pZBIVQhM1ODQwNjYxNTU3NDUzMDkxOTk1&filename=&opi=89354086",
  about: "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzA2ZWM3NjJlODU3MTQ5OGI4NTNiNjY3MmEyZmYyZmMyEgsSBxDN35z7zRYYAZIBIwoKcHJvamVjdF9pZBIVQhM1ODQwNjYxNTU3NDUzMDkxOTk1&filename=&opi=89354086",
  policies: "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzg0ZmJkNGRlMGQ5NzQwMjQ5YzA4ZjY2NWM3Y2M3YzE2EgsSBxDN35z7zRYYAZIBIwoKcHJvamVjdF9pZBIVQhM1ODQwNjYxNTU3NDUzMDkxOTk1&filename=&opi=89354086",
  faq: "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2MwMmIxYmI5OGVkZTQ2NjFhYjUyYjU5MDIxYzA4ZDNjEgsSBxDN35z7zRYYAZIBIwoKcHJvamVjdF9pZBIVQhM1ODQwNjYxNTU3NDUzMDkxOTk1&filename=&opi=89354086",
  contact: "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzlkODJlNDFjNzhlODRhOTI4OTVlYTU5NmEzMjJiOTJlEgsSBxDN35z7zRYYAZIBIwoKcHJvamVjdF9pZBIVQhM1ODQwNjYxNTU3NDUzMDkxOTk1&filename=&opi=89354086",
  delivery: "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzYzMTAxOTAyMWU5NTQ5ZDA5NDkzMzgwYTc4ZGUzYzE1EgsSBxDN35z7zRYYAZIBIwoKcHJvamVjdF9pZBIVQhM1ODQwNjYxNTU3NDUzMDkxOTk1&filename=&opi=89354086"
};

for (const [name, url] of Object.entries(urls)) {
  const filePath = path.join(dir, `${name}.html`);
  https.get(url, (res) => {
    const file = fs.createWriteStream(filePath);
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${name}.html`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${name}.html:`, err.message);
  });
}
