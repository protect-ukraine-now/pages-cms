export async function onRequest(context) {
  const { env } = context;
  const redirect_uri = `${new URL(context.request.url).origin}/auth/callback`
  console.log({ redirect_uri })
  const uri = `https://github.com/login/oauth/authorize?client_id=${env.GITHUB_CLIENT_ID}&redirect_uri=${encodeURIComponent(redirect_uri)}&scope=repo`
  return Response.redirect(uri, 302);
}
