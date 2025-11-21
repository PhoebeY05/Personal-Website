import {
	VideoPlayer,
	VideoPlayerContent,
	VideoPlayerControlBar,
	VideoPlayerMuteButton,
	VideoPlayerPlayButton,
	VideoPlayerSeekBackwardButton,
	VideoPlayerSeekForwardButton,
	VideoPlayerTimeDisplay,
	VideoPlayerTimeRange,
	VideoPlayerVolumeRange,
} from '@/components/ui/shadcn-io/video-player';

interface VideoProps {
	src: string;
}
export default function Video(asset: VideoProps) {
	return (
		<VideoPlayer className="overflow-hidden rounded-lg border">
			<VideoPlayerContent crossOrigin="" muted preload="auto" slot="media" src={asset.src} />
			<VideoPlayerControlBar>
				<VideoPlayerPlayButton />
				<VideoPlayerSeekBackwardButton />
				<VideoPlayerSeekForwardButton />
				<VideoPlayerTimeRange />
				<VideoPlayerTimeDisplay showDuration />
				<VideoPlayerMuteButton />
				<VideoPlayerVolumeRange />
			</VideoPlayerControlBar>
		</VideoPlayer>
	);
}
