//package com.piesat.project.common.config;
//
//import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
//import org.springframework.boot.context.properties.ConfigurationProperties;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.data.redis.connection.jedis.JedisConnectionFactory;
//import org.springframework.data.redis.core.RedisTemplate;
//import org.springframework.data.redis.core.StringRedisTemplate;
//
//import redis.clients.jedis.JedisPoolConfig;
//
///**
// * RedisConfig
// *
// * @author XiongNeng
// * @version 1.0
// * @since 2018/2/3
// */
//@Configuration
//@EnableAutoConfiguration
//public class RedisConfig {
//
//    @Bean
//    @ConfigurationProperties(prefix="redis")
//    public JedisPoolConfig getRedisConfig(){
//        JedisPoolConfig config = new JedisPoolConfig();
//        return config;
//    }
//
//    @Bean
//    @ConfigurationProperties(prefix="redis")
//    public JedisConnectionFactory getConnectionFactory(){
//        JedisConnectionFactory factory = new JedisConnectionFactory();
//        JedisPoolConfig config = getRedisConfig();
//        factory.setPoolConfig(config);
//        return factory;
//    }
//
//
//    @Bean
//    public RedisTemplate<?, ?> getRedisTemplate(){
//        RedisTemplate<?,?> template = new StringRedisTemplate(getConnectionFactory());
//        return template;
//    }
//}
