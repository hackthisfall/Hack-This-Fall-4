import { MongoClient } from "mongodb";

const uri =
  "mongodb://mongo:GEbA4DEC4f-CDEF-HB3b6B3e6EdB--he@roundhouse.proxy.rlwy.net:51520";

const client = new MongoClient(uri);

const database = client.db("test");
const tweets = database.collection("tweets");

export async function GET(request: Request) {
  const _tweets = tweets.find().sort({ entryId: -1 }).limit(100);

  const formattedTweets = [];
  const rawTweets = [];

  for await (const t of _tweets) {
    const tweet_data = t.content.itemContent.tweet_results.result;

    const date = new Date(tweet_data.legacy.created_at);

    date.setHours(date.getHours() + 5);
    date.setMinutes(date.getMinutes() + 30);

    const doc = {
      id: t.entryId,
      entryId: t.entryId,
      text: tweet_data.legacy.full_text,
      images: (tweet_data.legacy.entities.media || []).map(
        (m: any) => m.media_url_https
      ),
      user_img:
        tweet_data.core.user_results.result.legacy.profile_image_url_https,
      user_name: tweet_data.core.user_results.result.legacy.name,
      user_screen_name: tweet_data.core.user_results.result.legacy.screen_name,
      created_at: `${
        date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
      }:${
        date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
      } · ${
        date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
      } ${date.toLocaleString("default", {
        month: "short",
      })} ${date.getFullYear()}`,
    };

    formattedTweets.push(doc);
    rawTweets.push(t);
  }

  return Response.json({ tweets: formattedTweets, rawTweets }, {headers: });
}
