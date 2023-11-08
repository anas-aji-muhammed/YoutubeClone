package com.anasajimuhammed.ytubebackend.service.impl;

import com.anasajimuhammed.ytubebackend.models.VideoModel;
import com.anasajimuhammed.ytubebackend.repository.VideoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
@RequiredArgsConstructor
public class VideoService {
    private final S3FileService s3FileService;
    private final VideoRepository videoRepository;

    public void uploadVideo(MultipartFile file){
        String videoUrl = s3FileService.upload(file);
        VideoModel video = new VideoModel();
        video.setVideoUrl(videoUrl);
        videoRepository.save(video);

    }
}
