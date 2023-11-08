package com.anasajimuhammed.ytubebackend.service.impl;

import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.anasajimuhammed.ytubebackend.service.FileService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.util.UUID;

@RequiredArgsConstructor
@Service
public class S3FileService implements FileService {

    @Value("${aws.s3.bucket-name}")
    private String BUCKET_NAME;
//    public static final String BUCKET_NAME = "video-sharing-platform-bucket";
    private final AmazonS3Client amazonS3Client;

    @Override
    public String upload(MultipartFile file){

        //Setting meta data
        var fileNameExtension = StringUtils.getFilenameExtension(file.getOriginalFilename());
        var key = UUID.randomUUID().toString() + fileNameExtension;
        var metaData = new ObjectMetadata();
        metaData.setContentLength(file.getSize());
        metaData.setContentType(file.getContentType());

        try {
            amazonS3Client.putObject(BUCKET_NAME, key, file.getInputStream(), metaData);
        } catch (IOException e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Exception Occurred while uploading the file.");
        }

        //Settin th eobject access as public
        amazonS3Client.setObjectAcl(BUCKET_NAME, key, CannedAccessControlList.PublicRead);



        return amazonS3Client.getResourceUrl(BUCKET_NAME, key); // Return Video Url
    }
}
