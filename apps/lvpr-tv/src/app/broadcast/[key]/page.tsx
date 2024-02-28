import { BroadcastWithControls } from "@/components/broadcast/Broadcast";
import { getIngest } from "@livepeer/react/external";

export default async function BroadcastPage({
  params,
}: { params: { key?: string } }) {
  const ingestUrl = getIngest(params.key, {
    baseUrl:
      process.env.NEXT_PUBLIC_WEBRTC_INGEST_BASE_URL ??
      "https://playback.livepeer.studio/webrtc",
  });

  return (
    <main className="absolute inset-0 gap-2 flex flex-col justify-center items-center bg-black">
      <BroadcastWithControls ingestUrl={ingestUrl} />
    </main>
  );
}