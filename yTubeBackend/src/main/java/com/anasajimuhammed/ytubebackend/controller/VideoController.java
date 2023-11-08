package com.anasajimuhammed.ytubebackend.controller;


import com.anasajimuhammed.ytubebackend.service.impl.VideoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

/*
* This controller is Implements APIs for managing video uploading features
*
 */
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/videos")
public class VideoController {

    private final VideoService videoService;

    @PostMapping("/upload")
    @ResponseStatus(HttpStatus.CREATED)
    public void uploadVideo(
            @RequestParam("file")MultipartFile file
            ){

        videoService.uploadVideo(file);

    }
}
