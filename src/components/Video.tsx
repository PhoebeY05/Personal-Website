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
export default function Video({ src: string }) {
	return (
		<VideoPlayer className="overflow-hidden rounded-lg border">
			<VideoPlayerContent crossOrigin="" muted preload="auto" slot="media" src={src} />
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
