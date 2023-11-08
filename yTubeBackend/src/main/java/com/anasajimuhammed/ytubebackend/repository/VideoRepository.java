package com.anasajimuhammed.ytubebackend.repository;

import com.anasajimuhammed.ytubebackend.models.VideoModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface VideoRepository extends MongoRepository<VideoModel, String> {

}
