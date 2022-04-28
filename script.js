const serchmovies = async () => {
  try {
    const query = document.getElementById("query").value;
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=AIzaSyCPpFbYJHTXqIyyV6S3F44kCyTjfI5ROtU`
    );

    const data = await res.json();
    // console.log('data:', data);

    appendmovies(data.items);
  } catch (err) {
    console.log("err:", err);
  }
};

const appendmovies = (data) => {
  const movdata = document.querySelector("#moviesdisplay");
  movdata.innerHTML = null;

  data.forEach(
    ({
      id: { videoId },
      snippet: {
        title,
        thumbnails: {
          medium: { url },
        },
      },
    }) => {
      let frame = document.createElement("img");
      frame.src = url;

      let p = document.createElement("h5");
      p.innerText = title;

      let div = document.createElement("div");
      div.setAttribute("class", "dvd");
      div.append(frame, p);

      let dataobj = {
        videoId,
        url,
        title,
      };
      // moviedata.push(dataobj);

      div.onclick = () => {
        showvideos(dataobj);
      };

      movdata.append(div);
    }
  );
};

const defautmovie = async () => {
  try {
    const res1 = await fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=most%20popular&regionCode=in&key=AIzaSyCPpFbYJHTXqIyyV6S3F44kCyTjfI5ROtU"
    );

    const data1 = await res1.json();
    console.log("data1:", data1);

    defaultadd(data1.items);
  } catch (err) {
    console.log("err:", err);
  }
};

const defaultadd = (data) => {
  const movdata1 = document.querySelector("#moviesdisplay");
  movdata1.innerHTML = null;

  data.forEach(
    ({
      id: { videoId },
      snippet: {
        title,
        thumbnails: {
          medium: { url },
        },
      },
    }) => {
      let frame1 = document.createElement("img");
      frame1.src = url;

      let p1 = document.createElement("h5");
      p1.innerText = title;

      let div3 = document.createElement("div");
      div3.setAttribute("class", "dvd");
      div3.append(frame1, p1);

      let dataobj = {
        videoId,
        url,
        title,
      };

      div3.onclick = () => {
        showvideos(dataobj);
      };

      movdata1.append(div3);
    }
  );
};

defautmovie();

const showvideos = (x) => {
  window.location.href = "video.html";
  localStorage.setItem("video", JSON.stringify(x));
};

// video js
var moviedata2 = JSON.parse(localStorage.getItem("video"));
// console.log('moviedata2:', moviedata2)

let frame = document.createElement("iframe");
frame.src = `https://www.youtube.com/embed/${moviedata2.videoId}`;
frame.allow = "fullscreen";
frame.width = "100%";
frame.height = "450px";

let p = document.createElement("h5");
p.innerText = moviedata2.title;
p.style.fontSize = "25px";

document.querySelector("#video").append(frame, p);
