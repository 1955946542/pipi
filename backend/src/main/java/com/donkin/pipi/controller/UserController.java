package com.donkin.pipi.controller;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.donkin.pipi.annotation.AuthCheck;
import com.donkin.pipi.common.BaseResponse;
import com.donkin.pipi.common.DeleteRequest;
import com.donkin.pipi.common.ErrorCode;
import com.donkin.pipi.common.ResultUtils;
import com.donkin.pipi.config.WxOpenConfig;
import com.donkin.pipi.model.entity.User;
import com.donkin.pipi.model.vo.LoginUserVO;
import com.donkin.pipi.model.vo.UserVO;
import com.donkin.pipi.constant.UserConstant;
import com.donkin.pipi.exception.BusinessException;
import com.donkin.pipi.exception.ThrowUtils;
import com.donkin.pipi.model.dto.user.UserAddRequest;
import com.donkin.pipi.model.dto.user.UserLoginRequest;
import com.donkin.pipi.model.dto.user.UserQueryRequest;
import com.donkin.pipi.model.dto.user.UserRegisterRequest;
import com.donkin.pipi.model.dto.user.UserUpdateMyRequest;
import com.donkin.pipi.model.dto.user.UserUpdateRequest;
import com.donkin.pipi.service.UserService;

import java.util.List;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import lombok.extern.slf4j.Slf4j;
import me.chanjar.weixin.common.bean.WxOAuth2UserInfo;
import me.chanjar.weixin.common.bean.oauth2.WxOAuth2AccessToken;
import me.chanjar.weixin.mp.api.WxMpService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.util.DigestUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import static com.donkin.pipi.service.impl.UserServiceImpl.*;

/**
 * 用户接口
 *
 */
@RestController
@RequestMapping("/user")
@Slf4j
public class UserController {

    @Resource
    private UserService userService;

    @Resource
    private WxOpenConfig wxOpenConfig;

}
